from django.db import models

# Create your models here.

class Mood(models.Model):

    moodlevel = models.IntegerField(null=False)

    def __str__(self):
        return f'{self.moodlevel}'