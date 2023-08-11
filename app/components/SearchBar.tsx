export const SearchBar = ({ onChange }: { onChange: (value: string) => void }) => {
    const handleChange = (e: any) => {
        onChange(e.target.value)
    }

    return <>
        <input
            type="search"
            placeholder="Search..."
            onChange={handleChange}
        />
    </>
}