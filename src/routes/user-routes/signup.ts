export const signup = (db) => (req, res) => {
    const user = {name: req.body.name, password: req.body.password}

    db.collection('users').insertOne(user, (err, result) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
        } else {
            res.send(result.ops);
        }
    });
}