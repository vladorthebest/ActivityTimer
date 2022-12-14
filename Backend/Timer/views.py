from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin

from rest_framework.permissions import IsAuthenticated

from django.core.exceptions import ObjectDoesNotExist
from .serializers import ActivitySerializer
from .models import Activity


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        try:
            return self.queryset.get(user=self.request.user.id, activity_status=True)
        except ObjectDoesNotExist:
            return False

    def create(self, request):
        instance = self.get_object()
        if instance:
            # Update instance
            serializer = self.get_serializer(instance, data=request.data)
        else:
            # Create new instance
            serializer = self.get_serializer(
                data=request.data, context={"request": request})

        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)
