<template>
  <div :class="wrapperClass">
    <label v-if="label !== ''" class="block font-bold mb-2 lg:mb-1">{{ label }}</label>
    <div class="relative border-gray-700 dark:bg-gray-800 border-t border-b rounded border-l border-r">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'

export default {
  name: 'InputEditor',
  components: {
    EditorContent
  },

  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    wrapperClass: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      editor: null
    }
  },

  watch: {
    modelValue (value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    }
  },

  mounted () {
    this.editor = new Editor({
      editorProps: {
        attributes: {
          class: 'px-3 py-2 max-w-full focus:ring focus:outline-none dark:placeholder-gray-400 w-full min-h-[12rem] border-0 border-gray-700 dark:bg-gray-800 rounded'
        }
      },
      extensions: [
        StarterKit,
        Placeholder.configure({
          // Use a placeholder:
          placeholder: 'Write something …'
          // Use different placeholders depending on the node type:
          // placeholder: ({ node }) => {
          //   if (node.type.name === 'heading') {
          //     return 'What’s the title?'
          //   }

          //   return 'Can you add some further context?'
          // },
        })
      ],
      content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML())

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      }
    })
  },

  beforeUnmount () {
    this.editor.destroy()
  },

  methods: {
    applyFormatting (formatting) {
      console.log(formatting)
    }
  }
}
</script>

<style lang="scss">
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }
}

.bubble-menu {
  display: flex;
  background-color: #0d0d0d;
  padding: 0.2rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}

.floating-menu {
  background-color: #0d0d0d10;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}
</style>
