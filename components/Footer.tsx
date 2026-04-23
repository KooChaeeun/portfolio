export default function Footer() {
    return (
        <footer
            style={{
                borderTop: '1px solid var(--border)',
                padding: '28px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <p style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>
                © {new Date().getFullYear()} Koo Chaeeun. All rights reserved.
            </p>
        </footer>
    );
}
