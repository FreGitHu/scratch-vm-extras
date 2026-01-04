const formatMessage = require('format-message');
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');

class ExtrasCommentsExtension{
	constructor (runtime){
		/**
		 * The runtime instantiating this block package.
		 * @type {Runtime}
		 */
		this.runtime = runtime;
	}

	/**
	 * @returns {object} metadata for this extension and its blocks.
	 */
	getInfo() {
		return {
			id: "comments",
			name: formatMessage({
				id: "comments.categoryName",
				default: "Dialogs",
				description: "Name of the Comments extension."
			}),
			// blockIconURI
			// menuIconURI
			blocks: [
				{
					opcode: "comments_comment",
					text: formatMessage({
						id: "comments.commentBlock",
						default: "comment [COMMENT]",
						description: "Comment"
					}),
					blockType: BlockType.COMMAND,
					arguments: {
						COMMENT: {
							type: ArgumentType.STRING,
							defaultValue: formatMessage({
								id: "comments.comment",
								default: "comment",
								description: "comment"
							})
						}
					}
				}
			]
		}
	}

	comments_comment(args, util) {
		return;
	}
}