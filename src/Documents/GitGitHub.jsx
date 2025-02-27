import React from 'react'
import { CodeBlock } from '../Components/Sections/CodeBlock';
import { Table } from '../Components/Sections/Tables';
import { TextBlock } from '../Components/Sections/TextBlock';
import { Para } from '../Components/Sections/Para';
import { ListBlock } from '../Components/Sections/ListBlock';


function GitGitHub() {
  return (
    <div className='w-full'>
      <div className='flex mb-3 items-center justify-center border-b border-neutral-700'>
        <h1 className='text-4xl font-bold mb-2 text-neutral-300'>Git & GitHub</h1>
      </div>

      <div className='mt-2 space-y-6'>
        <TextBlock
          heading="Git Basics"
          id="git-basics"
          Children={
            <>
              <Para
                text="Git is a distributed version control system that helps developers track changes in their codebase. 
                It follows a flow: Workdir → [code]git add[/code] → Staging Area → [code]git commit[/code] → Repository → [code]git push[/code] → Remote (e.g., GitHub)."
              />

              <CodeBlock
                code={`# Initialize a new repository
git init

# Check the status of the repository
git status

# Add files to staging area
git add .

# Commit changes with a message
git commit -m "Initial commit"

# View commit history (compact view)
git log --oneline
`}
                language="bash"
              />
            </>
          }
        />

        <TextBlock
          heading="Git Branching and Merging"
          id="git-branching-merging"
          Children={
            <>
              <Para
                text="Git allows working on different features using branches. Branching helps maintain a clean development workflow."
              />

              <Table
                headers={["Command", "Description"]}
                rows={[
                  ["[code]git branch[/code]", "List all branches"],
                  ["[code]git branch <branch_name>[/code]", "Create a new branch"],
                  ["[code]git switch <branch_name>[/code]", "Switch to an existing branch"],
                  ["[code]git switch -c <branch_name>[/code]", "Create and switch to a new branch"],
                  ["[code]git merge <branch_name>[/code]", "Merge a branch into the current branch"],
                  ["[code]git merge --abort[/code]", "Abort a merge conflict"],
                  ["[code]git branch -d <branch_name>[/code]", "Delete a branch"]
                ]}
              />

              <CodeBlock
                code={`# Create and switch to a new branch
git branch feature-branch
git switch feature-branch

# Merge feature-branch into main
git switch main
git merge feature-branch

# Delete a branch after merging
git branch -d feature-branch
`}
                language="bash"
              />
            </>
          }
        />

        <TextBlock
          heading="Git Stash and Temporary Changes"
          id="git-stash"
          Children={
            <>
              <Para
                text="Git Stash helps in saving unfinished work temporarily so that you can switch branches or work on urgent changes."
              />

              <ListBlock
                title="Common Git Stash Commands"
                items={[
                  "[code]git stash[/code] - Save uncommitted changes",
                  "[code]git stash save \"message\"[/code] - Save with a message",
                  "[code]git stash list[/code] - View all stashes",
                  "[code]git stash pop[/code] - Apply the most recent stash and remove it",
                  "[code]git stash drop[/code] - Remove the most recent stash",
                  "[code]git stash apply stash@{0}[/code] - Apply a specific stash",
                  "[code]git stash clear[/code] - Remove all stashes"
                ]}
                ordered={false}
              />

              <CodeBlock
                code={`# Stash changes before switching branches
git stash save "WIP: Fixing UI issue"

# View all stashes
git stash list

# Apply and remove stash
git stash pop
`}
                language="bash"
              />
            </>
          }
        />

        <TextBlock
          heading="Git Rebase and Reset"
          id="git-rebase-reset"
          Children={
            <>
              <Para
                text="Rebasing helps keep the commit history clean, while reset allows reverting to a previous state."
              />

              <Table
                headers={["Command", "Description"]}
                rows={[
                  ["[code]git rebase <branch_name>[/code]", "Rebase current branch onto another branch"],
                  ["[code]git reset --hard <commit_hash>[/code]", "Reset repository to a specific commit"],
                  ["[code]git reflog[/code]", "View commit history with references"],
                  ["[code]git reflog <commit-hash>[/code]", "Show changes of a specific commit"]
                ]}
              />

              <CodeBlock
                code={`# Rebase feature branch onto main
git switch feature-branch
git rebase main

# Reset repository to a previous commit
git reset --hard abc1234
`}
                language="bash"
              />
            </>
          }
        />

        <TextBlock
          heading="GitHub Repository Setup"
          id="github-setup"
          Children={
            <>
              <Para
                text="When creating a new repository on GitHub, use the following template to initialize and push your project."
              />

              <CodeBlock
                code={`echo "# my-repo" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yourusername/my-repo.git
git push -u origin main
`}
                language="bash"
              />
            </>
          }
        />

        <TextBlock
          heading="Git Best Practices"
          id="git-best-practices"
          Children={
            <>
              <ListBlock
                title="Recommended Git Practices"
                items={[
                  "Always write meaningful commit messages.",
                  "Use feature branches for development.",
                  "Keep the main branch clean and stable.",
                  "Pull the latest changes before pushing your code.",
                  "Use [code]git rebase[/code] instead of [code]git merge[/code] to maintain a linear history.",
                  "Regularly push code to avoid losing progress."
                ]}
                ordered={true}
              />
            </>
          }
        />

      </div>
    </div>
  )
}

export default GitGitHub