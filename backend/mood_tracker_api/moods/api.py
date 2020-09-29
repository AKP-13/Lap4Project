from moods.models import Mood
from rest_framework import viewsets, permissions
from .serializers import MoodSerializer

# Lead Viewset


class MoodViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = MoodSerializer

    def get_queryset(self):
        return self.request.user.moods.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)