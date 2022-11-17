

Assignment Description:

- [x] Create new project using latest version of Laravel 
- [x] Install latest version of VueJs using npm
- [x] Create products tables using migration (id, name, picture, created_at and updated_at)
- [x] Create CRUD api for product
- [x] Create index page using VueJs to display (id, name, picture and created_at)
- [x] Create form page to Add/Edit products 
- [x] Add Delete button with confirmation message

Assignment Submission:

- [x] Write clear description in README.md file
- [x] Add steps to run the project in README.md file
- [x] Push your code to public repo on Github or Gitlab 
- [x] Send repo url

Assignment Plus Points:
- [x] Share project api on postman
- [x] Using Docker
- [x] Making nice UI, Good for me :)



### Getting Started

Dockerize Start
------------


    ./vendor/bin/sail up
	./vendor/bin/sail php artisan key:generate
	./vendor/bin/sail php artisan storage:link
	./vendor/bin/sail php artisan migrate --seed

**or** start normally

1. Change **DB_HOST=mysql** in the .env file to localhost or 127.0.0.1.
2. Edit the database name, password, user parts in the .env file according to you
3. Follow the below steps in terminal
```php
composer i
php artisan key:generate
php artisan migrate --seed
php artisan storage:link
php artisan serve
```


All tables have migration and factory. To reset the demo data;
	./vendor/bin/sail php artisan migrate:refresh --seed

## Postman

#### -> https://github.com/behlultest/vartur-task/blob/main/Postman/Vartur.postman_collection.json

    
    
## Screenshots

<img width="1392" alt="Ekran Resmi 2022-11-17 04 35 54" src="https://user-images.githubusercontent.com/118409698/202336286-3f3bb286-e223-4452-8923-a797fe911467.png">
<img width="1410" alt="Ekran Resmi 2022-11-17 04 35 43" src="https://user-images.githubusercontent.com/118409698/202336303-6d438b87-03ae-4a43-b067-9a9873c614ec.png">
<img width="1410" alt="Ekran Resmi 2022-11-17 04 35 18" src="https://user-images.githubusercontent.com/118409698/202336308-762ce857-1c10-49b8-81c9-e7ae3f84c9c4.png">
<img width="1406" alt="Ekran Resmi 2022-11-17 04 35 36" src="https://user-images.githubusercontent.com/118409698/202336314-21856f2a-016f-46a3-8d29-e4d872e300f1.png">
