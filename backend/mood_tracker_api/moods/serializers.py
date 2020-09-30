from rest_framework import serializers
from .models import Mood
from .models import Journal

class MoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mood
        fields = ('__all__') # you can use __all__ to get all


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ('__all__') # you can use __all__ to get all

