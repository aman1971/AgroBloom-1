from django.http import HttpResponse
from django.shortcuts import redirect, render

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User


# Create your views here.
def signUpFlow(request):
    print('sign up flow')


def signUp(request):
    print('sign up flow')

    render(request, 'users/signup.html')


def signIn(request):
    print('sign up flow', 'users/signin.html')


def signOut(request):
    print('sign up flow')
    pass