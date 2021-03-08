import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PostForm from 'src/components/PostForm'

export const QUERY = gql`
  query TAGS {
    tags {
      id
      name
    }
  }
`

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

export const Success = ({ tags }) => {
  const { addMessage } = useFlash()
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.posts())
      addMessage('Post created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (form) => {
    const input = { ...form, tags: form.tags.map((tag) => parseInt(tag)) }
    createPost({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Post</h2>
      </header>
      <div className="rw-segment-main">
        <PostForm onSave={onSave} loading={loading} error={error} tags={tags} />
      </div>
    </div>
  )
}
