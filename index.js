const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

// Routes
const homeRouter = require('./routes/home')
const contactRouter = require('./routes/contact')
const addRouter = require('./routes/add')
const newRouter = require('./routes/newPhone')

// post zaproslari uchun funlsiya
app.use(express.urlencoded({ extended: true }))

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/', homeRouter)
app.use('/contact', contactRouter)  
app.use('/add', addRouter)
app.use('/new', newRouter)

const port = 3000

app.listen(port, () => {
    console.log(`Express working on ${port} port`);
})