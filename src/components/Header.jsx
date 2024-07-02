function Header({content}) {
    return (
        <ul>
            {content.map(fruta => (
                <li class='item' key={fruta.id}>{fruta.text}</li>
            ))}

        </ul>
    );
}

export default Header;