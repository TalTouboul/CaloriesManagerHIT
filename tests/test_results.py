https://caloriesmanagerhit.onrender.com

testing getting the about
-------------------------
url=https://caloriesmanagerhit.onrender.com/about/
data.status_code=200
b'[{"firstname":"Orr","lastname":"Goren","id":205816341,"email":"orr.goren@gmail.com"},{"firstname":"Tal","lastname":"Tubul","id":208835355,"email":"taltub123@gmail.com"}]'
data.text=[{"firstname":"Orr","lastname":"Goren","id":205816341,"email":"orr.goren@gmail.com"},{"firstname":"Tal","lastname":"Tubul","id":208835355,"email":"taltub123@gmail.com"}]
[{'firstname': 'Orr', 'lastname': 'Goren', 'id': 205816341, 'email': 'orr.goren@gmail.com'}, {'firstname': 'Tal', 'lastname': 'Tubul', 'id': 208835355, 'email': 'taltub123@gmail.com'}]
firstname=Orr
lastname=Goren
id=205816341
Orr Goren 205816341


testing getting the report - 1
------------------------------
url=https://caloriesmanagerhit.onrender.com/report/?user_id=123123&year=2024&month=3
data.status_code=500
b'{}'
data.text={}
problem
'dinner'


testing adding calorie consumption
----------------------------------
url=https://caloriesmanagerhit.onrender.com/addcalories/
data.status_code=500
b'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Internal Server Error</pre>\n</body>\n</html>\n'
data.text=<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Internal Server Error</pre>
</body>
</html>

problem
Expecting value: line 1 column 1 (char 0)


testing getting the report - 2
------------------------------
url=https://caloriesmanagerhit.onrender.com/report/?user_id=123123&year=2024&month=4
data.status_code=500
b'{}'
data.text={}
problem
'dinner'

