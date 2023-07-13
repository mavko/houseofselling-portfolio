<template>
	<button type="button" @click="open = true"
		class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white focus:ring-offset-black text-base px-6 py-3 shadow-sm shadow-black/10 border border-white/20 hover:border-white/30 focus:border-white/30 text-whitehover:bg-white/5 backdrop-blur-sm transition-colors duration-100 inline-flex items-center rounded-full space-x-3 relative isolate overflow-hidden w-64 text-center items-center bg-gradient-to-r from-black/10 via-black/60 to-black/10 text-white transition-all">
		<div aria-hidden='true'
			class='absolute right-0 top-0 z-10 h-px w-28 bg-gradient-to-r from-slate-400/10 via-white/60 to-slate-400/10'>
		</div>
		<CommandLineIcon class="h-5 w-5 text-white mr-2" aria-hidden="true" />

		<span class="text-center mx-auto absolute inset-x-0">Who am I?</span>
		<div aria-hidden='true'
			class='absolute left-0 bottom-0 z-10 h-px w-28 bg-gradient-to-r from-slate-400/10 via-white/60 to-slate-400/10'>
		</div>
	</button>
	<TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
		<Dialog as="div" class="relative z-50" @close="open = false">
			<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
				leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black backdrop-blur bg-opacity-25 transition-opacity" />
			</TransitionChild>

			<div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
				<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
					enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100"
					leave-to="opacity-0 scale-95">
					<DialogPanel class="mx-auto max-w-4xl mt-10 transform transition-all">
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
