import React from 'react'

    const Teams = ({ teams }) => {
      return (
        <div>
          <center><h3>Team Details</h3></center>
          {teams.map((team) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{team.name}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

export default Teams