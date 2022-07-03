const express = require('express')
const app = express()
//app.com
//app.com/help
//app.com/about
const path = require('path')
const { abort } = require('process')

const publicDirPath  = path.join(__dirname,'../public')
app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

//app.get(route,handler func)
app.get('', (req,res) => {
    res.render('index',
     {
          title:'Weather App',
          name : 'Anisha Mahajan'
     })
    
//     // res.send('<h1>Main page</h1>')
//     res.send({
//         name:'Anisha',
//         age:21
//     })
} )

app.get('/help', (req,res) => {
    res.render('help', {
        title:'Help page',
        name:'Anisha Mahajan'
    })
    // res.send('<h1>Help page</h1>')
})
app.get('/about', (req,res) => {
    // res.send('<h1>About page</h1>')
    res.render('about',{
        title:'About page',
        name:'Anisha Mahajan'
    })
})
app.get('/weather', (req,res) => {
    res.send({
        location:'Amritsar',
        weather_condition: 'Sunny'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})