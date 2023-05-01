<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
	<button
		type="button"
		@click="open = true"
		class="inline-flex items-center gap-x-1.5 rounded-xl bg-white text-lg transition px-8 py-5 font-normal text-black"
	>
		<div
			style="
				background: linear-gradient(
					238.51deg,
					hsla(0, 0%, 100%, 0) 1.7%,
					hsla(0, 0%, 100%, 0.1) 43.93%,
					hsla(0, 0%, 100%, 0) 109.83%
				);
				box-shadow: 0 0 32px hsla(0, 0%, 100%, 0.1);
			"
		></div>
		<div
			style="
				background: linear-gradient(
					225.44deg,
					#fff,
					hsla(0, 0%, 100%, 0.2) 25%,
					hsla(0, 0%, 100%, 0.2) 75%,
					hsla(0, 0%, 100%, 0.5)
				);
			"
		></div>
		<CommandLineIcon class="h-5 w-5 text-black" aria-hidden="true" />
		Who am I?
	</button>
	<TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
		<Dialog as="div" class="relative z-50" @close="open = false">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div
					class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
				/>
			</TransitionChild>

			<div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
				<TransitionChild
					as="template"
					enter="ease-out duration-300"
					enter-from="opacity-0 scale-95"
					enter-to="opacity-100 scale-100"
					leave="ease-in duration-200"
					leave-from="opacity-100 scale-100"
					leave-to="opacity-0 scale-95"
				>
					<DialogPanel
						class="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all"
					>
						<Terminal />
					</DialogPanel>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { computed, ref } from 'vue'
import { CommandLineIcon } from '@heroicons/vue/20/solid'
import {
	DocumentPlusIcon,
	FolderPlusIcon,
	HashtagIcon,
	TagIcon,
} from '@heroicons/vue/24/outline'
import {
	Dialog,
	DialogPanel,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue'

const projects = [
	{ id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
	// More projects...
]
const recent = [projects[0]]
const quickActions = [
	{ name: 'Add new file...', icon: DocumentPlusIcon, shortcut: 'N', url: '#' },
	{ name: 'Add new folder...', icon: FolderPlusIcon, shortcut: 'F', url: '#' },
	{ name: 'Add hashtag...', icon: HashtagIcon, shortcut: 'H', url: '#' },
	{ name: 'Add label...', icon: TagIcon, shortcut: 'L', url: '#' },
]

const open = ref(false)
const query = ref('')
const filteredProjects = computed(() =>
	query.value === ''
		? []
		: projects.filter((project) => {
				return project.name.toLowerCase().includes(query.value.toLowerCase())
		  })
)

function onSelect(item) {
	window.location = item.url
}
</script>
