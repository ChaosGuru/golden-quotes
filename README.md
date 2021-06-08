[Golden Quotes](https://goldenquotes-82e81.web.app)

# Golden quotes project
The purpose of this project is to collect and share qoutes which sound great but have strange meaning.

# technologies
* @vue/cli 4.5.13
    * router
* firebase/ cli 9.12.0
    * realtime database
    * auth
    * appcheck (reCaptcha 3)

# Descriprion
Website uses firebase for qoutes storing, auth and hosting. Appcheck and google recaptcha 3 for ensuring that only the app can use firebase resources.
Vue is used for frontend development, and vue-router for log in page.

Websites has two modes:
1. Normal: you can view golden qoutes.
2. Editor: after entering correct secret code you can add and delete golden qoutes.