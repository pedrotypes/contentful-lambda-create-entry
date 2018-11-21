// Initiate contentful management SDK client
const contentful = require('contentful-management')
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_CMA_TOKEN
})

// Lambda handler function
exports.handler = (event, context) => {
  // Get the target space first
  client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    // Create an entry
    .then((space) => space.createEntry('product', {
      fields: {
        productName: {
          'en-US': 'Green lightsaber'
        }
      }
    }))
    // Grab the newly created entry and do something with it
    .then((entry) => {
      const response = {
        statusCode: 201,
        body: JSON.stringify(entry),
      };
      console.log(response)
      context.done()
    })
    .catch(console.error)
};
