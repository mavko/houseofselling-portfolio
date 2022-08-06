<template>
	<div class="container mx-auto text-slate-900 dark:text-slate-100">
		<div
			class="relative z-10 max-w-xl mx-auto shadow-lg bg-slate-100 dark:bg-slate-800 rounded-xl xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-white/10 ring-1 ring-slate-300"
		>
			<div
				class="relative flex text-lg font-medium leading-6 text-slate-700 dark:text-slate-100"
			>
				<div
					class="flex items-center flex-none px-4 py-3 mt-2 border-t border-b border-t-transparent border-b-slate-300"
				>
					Graphics
				</div>
				<div class="flex flex-auto pt-4 overflow-hidden rounded-tr-xl">
					<div
						class="flex-auto -mr-px border rounded-tl bg-slate-200 dark:bg-slate-700/50 border-slate-500/30"
					></div>
				</div>
				<div class="absolute right-0 flex items-center h-8 pt-1 pr-4 top-5">
					<div class="relative flex -mr-2">
						<a
							href="https://www.dribbble.com/sebastianselling"
							target="_blank"
							data-magnetic
							class="text-sm font-bold btn-underlined dark:text-slate-50 text-slate-900"
						>
							More on Dribbble
						</a>
					</div>
				</div>
			</div>
			<div class="relative">
				<form name="contact" netlify>
					<div
						class="relative rounded-md group dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent"
					>
						xl
						<input
							type="text"
							aria-label="Filter projects"
							placeholder="Filter projects..."
							class="w-full py-2 pl-10 text-sm leading-6 bg-transparent rounded-md shadow-sm appearance-none text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
						/>
					</div>
					<p>
						<label>Name <input type="text" name="name" /></label>
					</p>
					<p>
						<label
							>Email
							<div
								class="relative bg-white pointer-events-auto dark:bg-slate-900"
							>
								<input
									type="email"
									name="email"
									class="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
								/>
							</div>
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'contact',
	components: {},

	mounted() {},
}
</script>
