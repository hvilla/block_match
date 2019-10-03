# Block Match

A little puzzle discussed at work about putting a block sequence inside the code on phrase variable and returning if that block sequence is valid or not whatever its length.

## Use

Run the script vía command line and put the block sequence inside the code on phrase variable to test it.

### Example No. 1

In code look for phrase variable an change it for your convinience.

```
const phrase = '([({[()]})])[{(([{}]))}]'
```

Then run it with node.

```
$ node index.js
Valid
```

### Example No. 2

In code look for phrase variable an change it for your convinience.

```
const phrase = '(([{({[[{]})}]})])])}])'
```

Then run it with node.

```
$ node index.js
Wrong
```

## Authors

* *JavaScript version* - **Hector Villa Pizarro** - [HVP](https://github.com/hvilla)
* *Ruby version* - **Rafael Peña-Azar** - [RPA](https://rpaweb.github.io)

## Acknowledgments

* This was made for fun, just to exercise the logics.
* Feel free to fork, clone and use to test every block sequence you want.
* Try to burn it down. If you do, feel free to open an issue and tell us about it.
* In the other contributor's repo, there's the one made on Ruby. Go find it and use it too.
* Enjoy, hahaha.

## License

GNU General Public License v3.0
