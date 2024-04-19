# What was done
- Created templates for each section of the product page so that it kept product.liquid simple, but also allows for those templates to be used elsewhere as needed and simplifies the process of having to make changes to each section as they have their own templates
- Populated expected values in created templates
- Created add to cart template based off an example add to cart form I found online
- Created `add-to-cart.js` to handle add to cart functionality using an example found in Shopify's API documentation
- Added success modal with the aid of bootstrap
- Added CSS via bootstrap
- Created swatches for variant select
- And finally created a navbar via bootstrap to complete the look of the page

# What would I do better / Change if on a Shopify theme
- For price if it was on a Shopify store I'd have access to the stores money formatting to more easily/correctly format price
- If using Shopify store I could have used all the product images to make an image gallery/carosel which I would have liked to have done, instead of just using the featured image.
- When building the add.js call I tried to grab the product form and convert it to formData however was getting a 415 type error, so had to manually create the formData object myself. I believe this would have correctly worked if I was working on an actual Shopify theme
- I relied on Bootstrap to apply styling to the page for quick setup. Bootstrap is a pretty simplistic CSS framework, so if I were to use a CSS framework for styling I would like to use one that is more customizable like Tailwind, or simply write out all my own CSS

# Favourite part
- My favourite part outside of going through the Shopify and bootsrap API docs to help me find the values and how to correctly structure my code, was actually learning to quickly use Bootstrap itself. This was my first experience with using a CSS framework in a project, and I can definitely see the value in them for being able to quickly apply CSS