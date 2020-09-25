from django.shortcuts import render, redirect

# Create your views here.
# users/views.py
from django.contrib import messages
from .forms import UserSignupForm

def signup(req):
    if req.method == 'POST':
        form = UserSignupForm(req.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(req, f'Welcome, {username}!')
            return redirect('moods-home')
    else:
        form = UserSignupForm()
    data = {'form': form}
    return render(req, 'users/signup.html', data)
