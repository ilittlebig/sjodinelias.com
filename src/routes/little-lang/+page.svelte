<script lang="ts">
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
</script>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Little Lang</Project.Name>
		<Project.Image src="little-lang.png" />
		<Project.Content>
			<Project.Description>
				Little Lang is a simple, yet powerful programming language designed with a custom compiler and a set of essential tools. It supports various programming constructs, making it suitable for learning and experimenting with compiler design.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Maintainer</Project.Role>
				<Project.Techstack list={["C", "Makefile"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Reflections.Root>
		<Reflections.Title background="Features" foreground="Language Capabilities" />
		<Reflections.Children>
			<Reflections.Child
				title="Mathematical Operations"
				description="Supports basic operations like addition, subtraction, multiplication, division, and modulus, making arithmetic computations straightforward."
			/>
			<Reflections.Child
				title="Function Definitions and Calls"
				description="Allows defining and calling functions with typed parameters, promoting structured programming practices."
			/>
			<Reflections.Child
				title="Control Flow"
				description="Includes if statements, for-loops, and while-loops to provide versatile control flow capabilities."
			/>
			<Reflections.Child
				title="Array Support"
				description="Enables array manipulation for working with collections of data, making it suitable for a variety of use cases."
			/>
			<Reflections.Child
				title="Variable Assignments"
				description="Provides support for variable declarations and assignments with clear syntax for better code readability."
			/>
			<Reflections.Child
				title="Comments"
				description="Supports inline and block comments, allowing developers to document their code effectively."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Implementing Basic Arithmetic"
				description="Handling operator precedence and type checking for mathematical operations required careful design and debugging."
			/>
			<Reflections.Child
				title="Adding Control Flow"
				description="Implementing control flow constructs like loops and conditions involved creating a robust syntax tree and ensuring accurate parsing."
			/>
			<Reflections.Child
				title="Supporting Arrays"
				description="Implementing array functionality, including memory allocation and type consistency, was more complex than anticipated."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Understanding Compiler Design"
				description="Developing Little Lang provided hands-on experience with parsing, tokenization, and syntax tree generation, deepening my understanding of compiler design."
			/>
			<Reflections.Child
				title="Balancing Features and Simplicity"
				description="Striking a balance between adding new features and maintaining the language’s simplicity taught valuable lessons in project scope management."
			/>
			<Reflections.Child
				title="Debugging Complex Systems"
				description="Debugging the compiler to ensure accurate error reporting and functional execution improved my problem-solving and debugging skills."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/little-lang/" label="Github Page" />
		<Metadata.ProjectLink />
	</Metadata.Root>
</div>
