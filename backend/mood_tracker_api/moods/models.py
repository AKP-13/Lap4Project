from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import date
from django.contrib.auth.models import User

# Create your models here.
class Mood(models.Model):
    date = models.DateField(default=date.today)
    moodlevel = models.PositiveIntegerField(null=False, validators=[MinValueValidator(1), MaxValueValidator(5)])
    owner = models.ForeignKey(User, related_name="moods", on_delete=models.CASCADE, null=True)
    
    #name our keys to something readable
    def __str__(self):
        return f'{self.moodlevel} {self.date}'