from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Mood(models.Model):

    moodlevel = models.PositiveIntegerField(default=4, null=False, validators=[MinValueValidator(1), MaxValueValidator(5)])

    def __str__(self):
        return f'{self.moodlevel}'