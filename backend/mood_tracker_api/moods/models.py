from django.db import models

# Create your models here.

class Mood(models.Model):
    #user id will be managed by User later
    date: models.DateField(auto_now=True, editable=False, null=False, blank=False)
    moodlevel:models.IntegerField(null=True)
    # sleep-level:,
    # exercise-level:,
    # diet-level:,