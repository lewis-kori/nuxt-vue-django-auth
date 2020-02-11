# portfolio

> demonstration of jwt authentication with django's jwt

for django's auth set up, refer to my article on [dev.to](https://dev.to/lewiskori/user-registration-and-authorization-on-a-django-api-with-djoser-and-json-web-tokens-4kc7).
Adjust the endpoints accordingly.

whitelist port 3000 on the django settings to allow CORS requests like so:

```python
pip install django-cors-headers
pip install djangorestframework_simplejwt

INSTALLED_APPS = (
    ...
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
)

MIDDLEWARE_CLASSES = (
  ...
  'corsheaders.middleware.CorsMiddleware',
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}


```

``` python

CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = (
    # set this properly for production
    'http://127.0.0.1:3000',
)

```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
