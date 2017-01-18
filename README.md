###My first app angular-material (user list with more description about user)
#This app has not clear code. The app just worked
##Nginx config
```
server {
	#listen 80 default_server;
	#listen [::]:80 default_server;

	root /var/www/projects/angular-material;
	index index.php index.html index.htm index.nginx-debian.html;

	server_name angular-material.dev www.angular-material.dev;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
        	try_files $uri $uri/ /index.html =404;
	}

	# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
	#
	location ~ \.php$ {
		include snippets/fastcgi-php.conf;

		# With php7.0-cgi alone:
		#fastcgi_pass 127.0.0.1:9000;
		# With php7.0-fpm:
		fastcgi_pass unix:/run/php/php7.0-fpm.sock;
	}

	# deny access to .htaccess files, if Apache's document root
	# concurs with nginx's one
	#
	#location ~ /\.ht {
	#	deny all;
	#}
}
```
### Look my next better app with Angular JS and yii2: https://github.com/tolyaganzin/angular-yii2
