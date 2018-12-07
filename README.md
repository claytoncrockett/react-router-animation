# react-router-animation

* [react-router-animation](https://www.npmjs.com/package/react-router-animation) - NPM link
* [Live Demo](https://codesandbox.io/s/82yno5o2j8)

react-router-animation is a lightweight, simple component for adding a sliding animation transition when swapping between react-router components.
*MUST* be using react-router-dom for this package to work.

## Getting Started

In the root directory of your project:

```
npm install --save react-router-animation
OR
yarn add react-router-animation
```

### Prerequisites

Place the following import in the file where your routes are(for me App.js):

```
import SwitchWithSlide from "react-router-animation";
```

### After Installing 

Wrap your routes in App.js or wherever you have them in the HOC provided by react-router-animation

```
<SwitchWithSlide>
  <Route exact path="/" component={Home} />
  <Route exact path="/page" component={Page} />
</SwitchWithSlide>

```

## Built With

* [React](https://reactjs.org/) - JS framework
* [classnames](https://www.npmjs.com/package/classnames) - Only dependency used to conditionally assign class names

## Contributing

All contribution welcome :) Open an issue, submit a pull request, or contact me directly!


## Authors

* [Clayton Crockett](https://github.com/claytoncrockett)


## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

