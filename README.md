# sample-u

> a react app that demonstrates how to draw a map component, place a marker on it, make the marker drag-able, zero-down on location information based on marker position and be able to position a marker on the map from form inpu. 

## About

This project uses is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses  [semantic-ui-react](https://react.semantic-ui.com) as its css-framework.
The main 3rd party libraries used are:
1. [google-map-react](https://github.com/google-map-react/google-map-react)for rendering react components on google map 
2. [react-geocode](https://www.npmjs.com/package/react-geocode) for transorming google map cordinates to physical location address and viceversa


## To Run it

Getting up and running is as easy as 1, 2, 3.

1. Clone the repository.
2. Install your dependencies

    ```
    cd path/to/sample-u; yarn
    ```
3. set up [Google Maps API](https://developers.google.com/maps/) and include your google maps API key as the value for this constant:

```
MAP_API = # google maps api key
```    

4. Start your app

    ```
    yarn start
    ```

## Testing

Simply run `yarn test` and all your tests in the `test/` directory will be run.

## Bad Practises

In this particular example I exposed my bucket url ... you dont want to do that ... instead use .env to keep these secret

