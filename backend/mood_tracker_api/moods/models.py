from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import date

# Create your models here.

class Mood(models.Model):
    date = models.DateField(default=date.today)
    moodlevel = models.PositiveIntegerField(default=4, null=False, validators=[MinValueValidator(1), MaxValueValidator(5)])

    def __str__(self):
        return f'{self.moodlevel} {self.date}'