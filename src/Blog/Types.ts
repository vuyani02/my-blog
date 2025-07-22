export interface PeopleToFollowType {
    name: string;
    following: boolean;
}

export type toFollow = PeopleToFollowType & {
    follow: (name: string) => void;
}

export type trendType = {
    title: string,
    author: string
}

export type BlogType = {
    id: string,
    img: string,
    header: string,
    context: string,
    date: string
}

export type blogCardPropType = BlogType & setShowBlogAdderType & {
    deleteBlog: (id: string) => void,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    getOldBlog: (blog: BlogType) => void
}

export type setShowBlogAdderType = {
    setShowBlogAdder: React.Dispatch<React.SetStateAction<boolean>>
}

export type ShowBlogAdderType = {showBlogAdder: boolean} & setShowBlogAdderType;

export type blogFormPropType = setShowBlogAdderType & {
    addBlog: (blog: BlogType) => void
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    edit: boolean,
    editBlog: BlogType | null,
    setEditBlog: React.Dispatch<React.SetStateAction<BlogType | null>>,
    updateBlog: (newBlog: BlogType) => void,
};