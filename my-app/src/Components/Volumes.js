import React from "react";

export default function Volumes() {
    return (
        <section className="volumes">
            <h2 className="volumes__title"></h2>
            <div className="volumes__bar">
                <div className="volumes__bar__item">
                    <span className="volumes__bar__item__number">
                        2M+
                    </span>
                    <span className="volumes__bar__item__text">
                        Leads Processed
                    </span>
                </div>
                <div className="volumes__bar__item">
                    <span className="volumes__bar__item__number">
                        18K+
                    </span>
                    <span className="volumes__bar__item__text">
                        Doors Managed
                    </span>
                </div>
                <div className="volumes__bar__item">
                    <span className="volumes__bar__item__number">
                        $30K+
                    </span>
                    <span className="volumes__bar__item__text">
                            New Leases signed
                        </span>
                </div>
            </div>
            <div className="volumes__image">
                <img src="" alt=""/>
            </div>
        </section>
    )
}