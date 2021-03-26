// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/tags/new" page={NewTagPage} name="newTag" />
      <Route path="/tags/{id:Int}/edit" page={EditTagPage} name="editTag" />
      <Route path="/tags/{id:Int}" page={TagPage} name="tag" />
      <Route path="/tags" page={TagsPage} name="tags" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/test" page={TestPage} name="test" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
