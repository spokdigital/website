"use client";
import {
  MDXEditor,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  ListsToggle,
  CreateLink,
  InsertThematicBreak,
  UndoRedo,
  BlockTypeSelect,
  linkDialogPlugin,
  listsPlugin,
  thematicBreakPlugin,
  quotePlugin,
  headingsPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import '../../globals.css'
 
const Editor =({ onChange, markdown }) => {
  return (
    <div className="editor-container min-h-[200px]">
      <MDXEditor
        onChange={onChange}
        markdown={markdown && markdown}
        contentEditableClassName="prose"
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                <BlockTypeSelect />
                <CreateLink />
                <InsertThematicBreak />
              </>
            ),
          }),
          linkDialogPlugin(),
          listsPlugin(),
          thematicBreakPlugin(),
          headingsPlugin(),
          quotePlugin(),
        ]}
      />
    </div>
  );
};

export default Editor;