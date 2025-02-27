import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';

function DjangoSetup() {
  return (
    <div className='w-full'>
      <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
        <h1 className='text-4xl font-bold mb-2 text-neutral-300'>Django Setup and Essentials</h1>
      </div>

      <div className='mt-2 space-y-6'>
        <TextBlock
          heading='Django Documentation'
          id='django-docs'
          Children={
            <Para text='Refer to the official Django documentation for in-depth guidance: [link]Django Docs(https://docs.djangoproject.com)[/link]' />
          }
        />

        <TextBlock
          heading='Installation with Virtual Environment'
          id='django-install-venv'
          Children={
            <>
              <Para text='To install Django inside a virtual environment, follow these steps:' />
              <CodeBlock code='python3 -m venv .venv' language='bash' />
              <Para text='For a faster setup, use uv:' />
              <CodeBlock code='pip install uv
uv venv' language='bash' />
              <Para text='Activate the virtual environment:' />
              <CodeBlock code='source .venv/bin/activate' language='bash' />
              <Para text='Now install Django using uv:' />
              <CodeBlock code='uv pip install Django' language='bash' />
            </>
          }
        />

        <TextBlock
          heading='Creating a Django Project'
          id='django-create-project'
          Children={
            <>
              <Para text='To create a new Django project, use the following command:' />
              <CodeBlock code='django-admin startproject <project_name>' language='bash' />
              <Para text='Navigate into the project directory:' />
              <CodeBlock code='cd <project_name>' language='bash' />
              <Para text='Run the development server:' />
              <CodeBlock code='python manage.py runserver <port (optional)>' language='bash' />
            </>
          }
        />

        <TextBlock
          heading='Setting Up Static and Template Files'
          id='django-static-templates'
          Children={
            <>
              <Para text='Inside your project root, create `static/` and `templates/` directories.' />
              <ListBlock
                title='Update settings.py'
                items={[
                  "Add templates folder to DIRS: [] in settings.py",
                  "Add STATICFILES_DIRS=[os.path.join(BASE_DIR, 'static')] in settings.py"
                ]}
              />
            </>
          }
        />

        <TextBlock
          heading='Creating and Registering a Django App'
          id='django-create-app'
          Children={
            <>
              <Para text='To create a new Django app, use:' />
              <CodeBlock code='python manage.py startapp <app_name>' language='bash' />
              <Para text='Register the app in settings.py under INSTALLED_APPS:' />
              <CodeBlock code='INSTALLED_APPS = ["<app_name>", ...]' language='python' />
            </>
          }
        />

        <TextBlock
          heading='Adding Tailwind CSS to Django'
          id='tailwind-django'
          Children={
            <>
              <Para text='To integrate Tailwind with Django, install the required package:' />
              <CodeBlock code='uv pip install django-tailwind' language='bash' />
              <Para text='Ensure pip is up to date:' />
              <CodeBlock code='python -m pip install --upgrade pip' language='bash' />
              <Para text='Initialize Tailwind in your project:' />
              <CodeBlock code='python manage.py tailwind init' language='bash' />
              <Para text='Register the Tailwind app in settings.py:' />
              <CodeBlock code='TAILWIND_APP_NAME = "theme"' language='python' />
              <Para text='Install Tailwind dependencies:' />
              <CodeBlock code='python manage.py install_tailwind' language='bash' />
            </>
          }
        />

        <TextBlock
          heading='Creating a Superuser and Admin Panel Setup'
          id='django-superuser-admin'
          Children={
            <>
              <Para text='Run migrations before creating a superuser:' />
              <CodeBlock code='python manage.py migrate' language='bash' />
              <Para text='Create a Django superuser:' />
              <CodeBlock code='python manage.py createsuperuser' language='bash' />
              <Para text='Now, access the Django admin panel at:' />
              <CodeBlock code='http://127.0.0.1:8000/admin/' language='text' />
            </>
          }
        />

        <TextBlock
          heading='Working with Models and URLs'
          id='django-models-urls'
          Children={
            <>
              <Para text='Run migrations before defining models:' />
              <CodeBlock code='python manage.py migrate' language='bash' />
              <Para text='Define a model in models.py:' />
              <CodeBlock code='class ExampleModel(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)' language='python' />
              <Para text='Register the model in admin.py:' />
              <CodeBlock code='from django.contrib import admin
from .models import ExampleModel

admin.site.register(ExampleModel)' language='python' />
              <Para text='Define URL patterns in urls.py:' />
              <CodeBlock code='from django.urls import path
from .views import example_view

urlpatterns = [
    path("example/", example_view, name="example"),
]' language='python' />
            </>
          }
        />
      </div>
    </div>
  );
}

export default DjangoSetup;
