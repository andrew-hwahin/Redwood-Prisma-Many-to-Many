import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  const data = {
    title: input.title,
    tags: input.tags.map((id) => ({ id })),
  }

  return db.post.create({
    data,
  })
}

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  tags: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).tags(),
}
