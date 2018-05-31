/**
 * Created by George-Lenovo on 5/26/2018.
 */

const storage = require('./storage');

//success
storage.load()
storage.put('first', 'firstValue')
storage.put('second', 'secondValue')
storage.put('third', 'thirdValue')
storage.put('fouth', 'fourthValue')
console.log(storage.get('first'))
console.log(storage.getAll())
storage.delete('second')
storage.update('first', 'updatedFirst')

storage.save()
    .then(() => {
        storage.clear()
        console.log(storage.getAll())
        storage.load()
            .then(() => {
                console.log(storage.getAll())
            })
    })


//errors
/*storage.put('first','firstValue')
 storage.put('second','secondValue')
 storage.delete('second')
 storage.delete('second')

 storage.put(2,'someValue')

 storage.put('cat','dog')
 storage.put('cat','anotherDog')*/
