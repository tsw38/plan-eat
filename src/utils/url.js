export const pathToPageTitle = (path) => path
	.split('/')
	.slice(1)
	.map(crumbs => !!crumbs ?
		crumbs
			.split('-')
			.map(word => `${word[0].toUpperCase()}${word.substring(1,word.length)}`)
			.join(' ') :
		''
    ).join(' - ');

export const pathToPageClass = (path) => path
	.split('/')
	.slice(1)[0]
	.split('-')
    .map(word => {
        return !!word ?
            `${word[0].toUpperCase()}${word.substring(1,word.length)}` :
            ''
    })
    .join('');