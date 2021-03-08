import {
  FieldError,
  Form,
  FormError,
  Label,
  SelectField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="tags"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tags
        </Label>
        <SelectField
          multiple
          name="tags"
          defaultValue={props.post?.tags}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          {props.tags?.map((tag) => (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          ))}
        </SelectField>
        <FieldError name="tags" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
