 
const path = require(`path`);
const config = require('./src/utils/siteConfig');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    if (config.showBlog) {
      createPage({
        path: `blog/`,
        component: path.resolve(`./src/templates/blog.js`),
      });
      graphql(`
        {
          allContentfulPost {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        result.data.allContentfulPost.edges.map(({ node }) => {
          createPage({
            path: `blog/${node.slug}/`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
    } else {
      resolve();
    }
  })

  const loadGalleries = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulExtendedGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulExtendedGallery.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadCommercials = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulExtendedCommercial {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulExtendedCommercial.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulTag.edges.map(({ node }) => {
        createPage({
          path: `tag/${node.slug}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadGalleries, loadTags, loadCommercials])
}