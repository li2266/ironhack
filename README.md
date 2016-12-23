# ironhack
Folder:

model: Functions and sql. They could create connection to mysql database. 

public: Static file such as javascript, css.

routes: For webpage routing.

util: Function or constant which will be used by system.

views: HTML web page.

Use "npm start" in this directory to run this project and the address is http://localhost:3000

About security: I want to use RSA in login system. I could encrypt password with public key on webpage, but crypto doesn't support decrypt with private key. I know ursa could do that but install it on my new computer costs me too much time. So, I just use SHA1 to hash the password and send it to server. So, my solution is not perfect.