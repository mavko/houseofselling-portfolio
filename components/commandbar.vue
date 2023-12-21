<template>
	<button type="button" @click="open = true"
		class='group relative mx-auto z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white bg-neutral-950 [border-radius:var(--radius)] shadow-xl w-fit ease-in-out duration-500 transition-all hover:scale-110'
		style='--spread: 90deg; --shimmer-color: #ffffff; --radius: 100px; --speed: 1.5s; --cut: 0.1em;'>

		<div class='-z-30 blur-sm absolute inset-0 overflow-visible [container-type:size]'>
			<div class='absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]'>
				<div
					class='absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*1)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]'>
				</div>
			</div>
		</div>

		<span class='text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg flex items-center'>
			<CommandLineIcon class="h-5 w-5 text-white mr-2" aria-hidden="true" />Inquire Terminal
		</span>

		<div
			class='absolute bottom-0 left-1/2 h-2/5 w-3/4 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-lg transition-all duration-300 ease-in-out group-hover:h-3/5 group-hover:opacity-100'>
		</div>

		<div class='absolute -z-20 bg-neutral-950 [border-radius:var(--radius)] [inset:var(--cut)]'>
		</div>
	</button>
	<TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
		<Dialog as="div" class="relative z-50" @close="open = false">
			<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
				leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-zinc-950/5 backdrop-blur-lg bg-opacity-5 transition-opacity" />
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
<style scoped>
:root {
	--size-default: 22px;
	--size-sm: 16px;
	--color-green: #58DD93;
	--color-black: #000;
}

@keyframes rotate {
	0% {
		--angle: 0deg;
		--glowColor: var(--color-green);
	}

	100% {
		--angle: 360deg;
		--glowColor: var(--color-green);
	}
}

.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	border: none;
	background: none;
	position: relative;
	padding: 1px;
	text-decoration: none;
	transition: all 0.18s ease-in-out;
	transform: translate3d(0, 0, 0);
}

.btn:after,
.btn:before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: calc(100px + 1.5px);
	background-size: 100% 100%;
	background-position: 0px 0px;
	background-image: conic-gradient(from var(--angle) at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 33%, var(--glowColor) 50%, rgba(0, 0, 0, 0) 66%, rgba(0, 0, 0, 0) 100%);
	animation: rotate 2s infinite linear;
}

.btn:before {
	animation: rotate 2s infinite linear;
	filter: blur(20px);
}

.btn .btnInner {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: var(--size-sm) var(--size-default);
	border-radius: 100px;
	color: var(--color-green);
	font-weight: 500;
	font-size: 22px;
	z-index: 1;
	transition: all 0.18s ease;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(40px);
	backface-visibility: hidden;
}

.btn:hover .btnInner {
	background: rgba(88, 221, 147, 0.1);
	color: #adeeca;
}

.btn:active {
	transform: scale(0.95);
}
</style>
