import React from 'react'

function Stats({githubData}) {
    return (
        <div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Projets privés</div>
                    <div className="stat-value text-primary">
                        {githubData?.total_private_repos}
                    </div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Projets publics</div>
                    <div className="stat-value text-secondary">{githubData?.public_repos}</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={githubData?.avatar_url} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">{githubData?.public_repos+githubData?.total_private_repos}</div>
                    <div className="stat-title">Projets réalisés</div>
                    <div className="stat-desc text-secondary">{githubData?.collaborators} Collaboration{githubData?.collaborators>1?'s':''}</div>
                </div>
            </div>
        </div>
    )
}

export default Stats