const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.errors) {
        throw result.errors
      }
      const {
        data: { allContentfulBlogPost },
      } = result
      const blogPost = path.resolve('./src/templates/blog-post.jsx')
      allContentfulBlogPost.nodes.forEach((post, index) => {
        createPage({
          path: `/blog/${post.slug}/`,
          component: blogPost,
          context: {
            slug: post.slug,
          },
        })
      })
    })
    .then(() =>
      graphql(`
        {
          allContentfulPage {
            nodes {
              name
              path
              template
              content {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `)
    )
    .then((result) => {
      if (result.errors) {
        throw result.errors
      }
      const {
        data: { allContentfulPage },
      } = result
      allContentfulPage.nodes.forEach((page, index) => {
        const templatePath = `./src/templates/${page.template || 'default'}.jsx`
        const component = path.resolve(templatePath)
        createPage({
          path: page.path,
          component,
          context: { page },
        })
      })
    })
    .catch((error) => {
      throw error
    })
}
