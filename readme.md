# Contentful/Lambda Create Entry example

0/ Make sure you have a Contentful space first. Grab its ID and your CMA token for the next steps.

1/ Clone this repository.

2/ Install NPM dependencies.

3/ Zip the entire directory and upload it to your lambda function.

4/ Configure the following variables in your lambda function:

```js
CONTENTFUL_CMA_TOKEN: <your own CMA token>
CONTENTFUL_SPACE_ID: <ID of the target space>
```

5/ Customize the code in `index.js` if necessary, to make sure the entry being created is of an existing content type and its payload is correct. This example code works out of the box with a "Product Catalogue" example space.

