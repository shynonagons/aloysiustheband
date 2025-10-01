
type Release = {
    id: string;
    title: string;
    artwork: string;
    description: string;
}
const releases: Release[] = [
    {
        id: '1',
        title: 'Release 1',
        artwork: '/path/to/artwork1.jpg',
        description: 'Description for release 1'
    },
    {
        id: '2',
        title: 'Release 2',
        artwork: '/path/to/artwork2.jpg',
        description: 'Description for release 2'
    }
]

export function ReleaseCard({id, title, artwork, description}: Release) {
    return (
    <div key={id} className='w-96 h-96'>
      <h2>{title}</h2>
      <img src={artwork} alt={`${title} artwork`} />
      <p>{description}</p>
    </div>
    );
}

export function ReleasesOverview() {
    return (
        <div className='flex gap-5'>
            {releases.map(release => (
                <ReleaseCard {...release} />
            ))}
        </div>
    )
}