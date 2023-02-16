const bodyParser = require('body-parser')

const app = require('express')();

app.use(bodyParser.json())

const resvers = (str) => {
    let n = str.length;
    if (n <= 1) {
        return str
    }
    let i = n-1, str2 = [];
    while(i >= 0) {
        if (str[i] == '*' || str[i] == '!') {
            if (str2[i]) {
                str2 = (str2.slice(0, i) + str[i] + str2.slice(i)).split("");
            } else {
                str2[i] = str[i];
            }
        } else {
            str2.push(str[i]);
        }
        i--;
    }
    return str2.join("");
}

app.post('/sum', (request, response, next) => {
    const { str } = request.body;
    // G*0d Morn!ng

    response.status(200).send({
        staus: 'success',
        message: 'Sum is calculated',
        data: {
            reverse: resvers(str)
        }
    })
})

app.listen(5000, console.log('Application listen on port 5000'));
